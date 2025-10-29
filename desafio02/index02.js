// Aplicando Bridge

class OutputFormat {
  renderHeader() {}
  renderData(data) {}
  renderFooter() {}
}

class PDFFormat extends OutputFormat {
  renderHeader() {
    console.log("--- Relatório em PDF: INÍCIO ---");
  }
  renderData(data) {
    console.log(`PDF: Incluindo ${data.length} registros no corpo.`);
  }
  renderFooter() {
    console.log("--- Relatório em PDF: FIM ---");
  }
}

class CSVFormat extends OutputFormat {
  renderHeader() {
    console.log("--- Relatório em CSV: INÍCIO ---");
  }
  renderData(data) {
    const columns = Object.keys(data[0] || {});
    console.log(`CSV: Adicionando cabeçalho: ${columns.join(',')}`);
    console.log(`CSV: Exportando ${data.length} linhas de dados.`);
  }
  renderFooter() {
    console.log("--- Relatório em CSV: FIM ---");
  }
}

class ReportGenerator {
  constructor(format) {
    this.format = format;
  }

  generate(data) {
    this.format.renderHeader();
    this.format.renderData(data);
    this.format.renderFooter();
  }
}

class AdvancedReportGenerator extends ReportGenerator {
  addCustomSection(content) {
    console.log(`[Relatório Avançado] Adicionando seção personalizada: ${content}`);
  }

  generate(data) {
    this.format.renderHeader();
    console.log("[Relatório Avançado] Aplicando filtros...");
    this.format.renderData(data);
    this.addCustomSection("Dados de Performance Chave (KPDs).");
    this.format.renderFooter();
  }
}

// --- Uso ---

const sampleData = [
    { id: 1, name: "Produto A", value: 50 },
    { id: 2, name: "Produto B", value: 120 }
];

const pdfFormat = new PDFFormat();
const csvFormat = new CSVFormat();

const basicPDFGenerator = new ReportGenerator(pdfFormat);
console.log("Gerando Relatório Básico em PDF:");
basicPDFGenerator.generate(sampleData);

console.log("\n" + "=".repeat(40) + "\n");

const advancedCSVGenerator = new AdvancedReportGenerator(csvFormat);
console.log("Gerando Relatório Avançado em CSV:");
advancedCSVGenerator.generate(sampleData);