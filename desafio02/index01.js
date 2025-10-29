class LegacyDocumentConverter {
  convertDocument(fileName) {
    console.log(`Convertendo o documento: "${fileName}" usando o sistema legado.`);
  }
}

class ModernFileConverterAPI {
  processFileContent(fileBytes) {
    const fileSizeInMB = fileBytes / 1024 / 1024;
    console.log(`Processando e convertendo arquivo de ${fileSizeInMB.toFixed(2)} MB via API moderna.`);
  }
}

class ModernConverterAdapter {
  constructor(modernAPI) {
    this.modernAPI = modernAPI;
  }

  convertDocument(fileName) {
    console.log(`[Adaptador] Buscando conteúdo de "${fileName}"...`);
    const fileBytes = fileName.length * 1000 * 1024;

    this.modernAPI.processFileContent(fileBytes);
  }
}

class ConversionProcessor {
  constructor(converterSystem) {
    this.converterSystem = converterSystem;
  }

  convert(fileName) {
    this.converterSystem.convertDocument(fileName);
  }
}

// --- Uso ---

const legacyConverter = new LegacyDocumentConverter();
const processorLegacy = new ConversionProcessor(legacyConverter);
processorLegacy.convert("Relatorio_Antigo_Q3.doc");

console.log("\n" + "-".repeat(30) + "\n");

const modernAPI = new ModernFileConverterAPI();
const modernAdapter = new ModernConverterAdapter(modernAPI); 
const processorModern = new ConversionProcessor(modernAdapter); 
processorModern.convert("Nova_Proposta_Comercial_2025.docx");