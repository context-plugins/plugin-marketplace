import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `SKRIBBLE_BEARER`. */
  readonly bearer?: SecretProvider | undefined;
  /** Unset, it is read from `SKRIBBLE_BEARER_AUTH`. */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /** Production - Switzerland */
        default?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleAdditionalInformationApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleDocumentApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleIdentificationApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleMonitoringApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleReportApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSealApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSendToApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureAttachmentApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureHandlingApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureSignerApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleUserApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /** Production - Switzerland */
        default?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleAdditionalInformationApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleDocumentApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleIdentificationApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleMonitoringApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleReportApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSealApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSendToApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureAttachmentApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureHandlingApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureSignerApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleUserApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment3;
      readonly serverOptions?: {
        /** Production - Switzerland */
        default?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleAdditionalInformationApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleDocumentApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleIdentificationApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleMonitoringApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleReportApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSealApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSendToApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureAttachmentApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureHandlingApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureSignerApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleUserApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment4;
      readonly serverOptions?: {
        /** Production - Switzerland */
        default?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleAdditionalInformationApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleDocumentApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleIdentificationApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleMonitoringApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleReportApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSealApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSendToApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureAttachmentApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureHandlingApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureSignerApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleUserApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment5;
      readonly serverOptions?: {
        /** Production - Switzerland */
        default?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleAdditionalInformationApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleDocumentApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleIdentificationApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleMonitoringApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleReportApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSealApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSendToApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureAttachmentApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureHandlingApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureSignerApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleUserApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment6;
      readonly serverOptions?: {
        /** Production - Switzerland */
        default?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleAdditionalInformationApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleDocumentApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleIdentificationApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleMonitoringApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleReportApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSealApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSendToApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureAttachmentApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureHandlingApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleSignatureSignerApi?: {
          baseUrl?: string;
        };
        /** Production - Switzerland */
        defaultSkribbleUserApi?: {
          baseUrl?: string;
        };
      };
    };
