import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * CarsXE API key from https://api.carsxe.com/dashboard, Your CarsXE API key, passed as the `key`
   * query parameter., Your CarsXE API key, passed as the `key` query parameter., Your CarsXE API
   * key, passed as the `key` query parameter., Your CarsXE API key, passed as the `key` query
   * parameter., Your CarsXE API key, passed as the `key` query parameter., Your CarsXE API key,
   * passed as the `key` query parameter., Your CarsXE API key, passed as the `key` query
   * parameter., Your CarsXE API key, passed as the `key` query parameter., Your CarsXE API key,
   * passed as the `key` query parameter.
   *
   * @remarks
   * Unset, it is read from `CARS_XE_API_KEY_QUERY`.
   */
  readonly apiKeyQuery?: SecretProvider | undefined;
  /**
   * x402 payment proof for supported operations. Start without a CarsXE key to receive HTTP 402
   * payment requirements, then retry the identical request with the payment header produced by your
   * x402 client. CarsXE also accepts the legacy X-PAYMENT header.
   *
   * @remarks
   * Unset, it is read from `CARS_XE_X402_PAYMENT`.
   */
  readonly x402Payment?: SecretProvider | undefined;
  /**
   * Batch-scoped token returned by an x402 Recalls Batch submission.
   *
   * @remarks
   * Unset, it is read from `CARS_XE_RECALLS_BATCH_TOKEN`.
   */
  readonly recallsBatchToken?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
