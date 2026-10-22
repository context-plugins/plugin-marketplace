export function uuid(): string {
  const webCrypto = cryptoGlobals.crypto;
  if (webCrypto?.randomUUID !== undefined) return webCrypto.randomUUID();

  const bytes = new Uint8Array(16);
  if (webCrypto?.getRandomValues !== undefined) webCrypto.getRandomValues(bytes);
  else fillPseudoRandomBytes(bytes);
  bytes[6] = ((bytes[6] ?? 0) & 0x0f) | 0x40;
  bytes[8] = ((bytes[8] ?? 0) & 0x3f) | 0x80;

  const text = hex(bytes);
  return `${text.slice(0, 8)}-${text.slice(8, 12)}-${text.slice(12, 16)}-${text.slice(16, 20)}-${text.slice(20)}`;
}

type CryptoLike = {
  readonly randomUUID?: () => string;
  readonly getRandomValues?: (array: Uint8Array<ArrayBuffer>) => unknown;
};

type CryptoGlobals = {
  readonly crypto?: CryptoLike;
};

const cryptoGlobals: CryptoGlobals = globalThis;

let pseudoRandomCalls = 0;

function fillPseudoRandomBytes(bytes: Uint8Array): void {
  for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);

  let time = Date.now();
  for (let i = 5; i >= 0; i--) {
    bytes[i] = (bytes[i] ?? 0) ^ (time % 256);
    time = Math.floor(time / 256);
  }

  pseudoRandomCalls = (pseudoRandomCalls + 1) % 65536;
  bytes[10] = (bytes[10] ?? 0) ^ Math.floor(pseudoRandomCalls / 256);
  bytes[11] = (bytes[11] ?? 0) ^ (pseudoRandomCalls % 256);
}

const hex = (bytes: Uint8Array): string =>
  Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
