class LegacyPaymentSystem {
  makePayment(amount) {
    console.log(`Pagando R$${amount} com sistema legado.`);
  }
}

class ModernPaymentAPI {
  process(amountInCents) {
    console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
  }
}

class ModernPaymentAdapter {
  constructor(modernApi) {
    this.modernApi = modernApi;
  }

  makePayment(amount) {
    console.log("Adapter: Convertendo R$ para centavos...");
    const amountInCents = amount * 100;
    this.modernApi.process(amountInCents);
  }
}

class PaymentProcessor {
  constructor(paymentSystem) {
    this.paymentSystem = paymentSystem;
  }

  pay(amount) {
    this.paymentSystem.makePayment(amount);
  }
}

console.log("--- 1. Usando o Sistema Legado (Original) ---");
const legacy = new LegacyPaymentSystem();
const legacyProcessor = new PaymentProcessor(legacy);
legacyProcessor.pay(100);

console.log("\n");

console.log("--- 2. Usando a API Moderna (com Adapter) ---");
const modernApi = new ModernPaymentAPI();
const adapter = new ModernPaymentAdapter(modernApi);
const modernProcessor = new PaymentProcessor(adapter);
modernProcessor.pay(250);