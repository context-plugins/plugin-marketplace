import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Your Lusha API key. You can find this in your Lusha dashboard under API settings. Include this
   * key in the `api_key` header for all requests. , Your Lusha API key. You can find this in your
   * Lusha dashboard under API settings.
   *
   * Include this key in the `api_key` header for all requests., Your Lusha API key. You can find
   * this in your Lusha dashboard under API settings. Include this key in the `api_key` header for
   * all requests., Your Lusha API key. You can find this in your Lusha dashboard under API
   * settings. Include this key in the `api_key` header for all requests., Your Lusha API key. You
   * can find this in your Lusha dashboard under API settings.
   *
   * Include this key in the `api_key` header for all requests., Your Lusha API key. You can find
   * this in your Lusha dashboard under API settings.
   *
   * Include this key in the `api_key` header for all requests., Your Lusha API key. You can find
   * this in your Lusha dashboard under API settings. Include this key in the `api_key` header for
   * all requests., Your Lusha API key. You can find this in your Lusha dashboard under API
   * settings. Include this key in the `api_key` header for all requests., Your Lusha API key. You
   * can find this in your Lusha dashboard under API settings.
   *
   * Include this key in the `api_key` header for all requests., Your Lusha API key. You can find
   * this in your Lusha dashboard under API settings. Include this key in the `api_key` header for
   * all requests., Your Lusha API key. You can find this in your Lusha dashboard under API
   * settings. Include this key in the `api_key` header for all requests., Your Lusha API key. You
   * can find this in your Lusha dashboard under API settings. Include this key in the `api_key`
   * header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under
   * API settings.
   *
   * Include this key in the `api_key` header for all requests., Your Lusha API key. You can find
   * this in your Lusha dashboard under API settings. Include this key in the `api_key` header for
   * all requests., Your Lusha API key. You can find this in your Lusha dashboard under API
   * settings. Include this key in the `api_key` header for all requests., Your Lusha API key. You
   * can find this in your Lusha dashboard under API settings. Include this key in the `api_key`
   * header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under
   * API settings. Include this key in the `api_key` header for all requests., Your Lusha API key.
   * You can find this in your Lusha dashboard under API settings. Include this key in the `api_key`
   * header for all requests.
   *
   * @remarks
   * Unset, it is read from `LUSHA_API_KEY_AUTH`.
   */
  readonly apiKeyAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Production server */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
