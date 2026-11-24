import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentRedactionSchema, type ContentRedaction } from "./content-redaction.js";
import { jobExecutionSettingsSchema, type JobExecutionSettings } from "./job-execution-settings.js";
import {
  languageCode3AmazonTranscribeServiceTranscriptionJobsApiSchema,
  type LanguageCode3AmazonTranscribeServiceTranscriptionJobsApi,
} from "./language-code3-amazon-transcribe-service-transcription-jobs-api.js";
import { languageIdSettingsSchema, type LanguageIdSettings } from "./language-id-settings.js";
import { languageOptionSchema, type LanguageOption } from "./language-option.js";
import { mediaFormat1Schema, type MediaFormat1 } from "./media-format1.js";
import { mediaSchema, type Media } from "./media.js";
import { modelSettingsSchema, type ModelSettings } from "./model-settings.js";
import { settingsSchema, type Settings } from "./settings.js";
import { subtitlesSchema, type Subtitles } from "./subtitles.js";
import { tagSchema, type Tag } from "./tag.js";
import {
  toxicityDetectionSettingsSchema,
  type ToxicityDetectionSettings,
} from "./toxicity-detection-settings.js";

export type StartTranscriptionJobRequest = {
  /**
   * A unique name, chosen by you, for your transcription job. The name that you specify is also
   * used as the default name of your transcription output file. If you want to specify a different
   * name for your transcription output, use the OutputKey parameter. This name is case sensitive,
   * cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to
   * create a new job with the same name as an existing job, you get a ConflictException error.
   */
  transcriptionJobName: string;
  /**
   * The language code that represents the language spoken in the input media file. If you're unsure
   * of the language spoken in your media file, consider using IdentifyLanguage or
   * IdentifyMultipleLanguages to enable automatic language identification. Note that you must
   * include one of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages in your request. If
   * you include more than one of these parameters, your transcription job fails. For a list of
   * supported languages and their associated language codes, refer to the Supported languages
   * table. To transcribe speech in Modern Standard Arabic (ar-S
   */
  languageCode?: LanguageCode3AmazonTranscribeServiceTranscriptionJobsApi;
  /**
   * The sample rate, in hertz, of the audio track in your input media file. If you do not specify
   * the media sample rate, Amazon Transcribe determines it for you. If you specify the sample rate,
   * it must match the rate detected by Amazon Transcribe. If there's a mismatch between the value
   * that you specify and the value detected, your job fails. In most cases, you can omit
   * MediaSampleRateHertz and let Amazon Transcribe determine the sample rate.
   */
  mediaSampleRateHertz?: number;
  /** Specify the format of your input media file. */
  mediaFormat?: MediaFormat1;
  media: Media;
  /**
   * The name of the Amazon S3 bucket where you want your transcription output stored. Do not
   * include the S3:// prefix of the specified bucket. If you want your output to go to a sub-folder
   * of this bucket, specify it using the OutputKey parameter; OutputBucketName only accepts the
   * name of a bucket. For example, if you want your output stored in S3://DOC-EXAMPLE-BUCKET, set
   * OutputBucketName to DOC-EXAMPLE-BUCKET. However, if you want your output stored in
   * S3://DOC-EXAMPLE-BUCKET/test-files/, set OutputBucketName to DOC-EXAMPLE-BUCKET and OutputKey
   * to test-files/. Note that Amazon Transcribe must hav
   */
  outputBucketName?: string;
  /**
   * Use in combination with OutputBucketName to specify the output location of your transcript and,
   * optionally, a unique name for your output file. The default name for your transcription output
   * is the same as the name you specified for your transcription job (TranscriptionJobName). Here
   * are some examples of how you can use OutputKey: If you specify 'DOC-EXAMPLE-BUCKET' as the
   * OutputBucketName and 'my-transcript.json' as the OutputKey, your transcription output path is
   * s3://DOC-EXAMPLE-BUCKET/my-transcript.json. If you specify 'my-first-transcription' as the
   * TranscriptionJobName, 'DOC-EXAMPLE-BUCK
   */
  outputKey?: string;
  /**
   * The Amazon Resource Name (ARN) of a KMS key that you want to use to encrypt your transcription
   * output. KMS key ARNs have the format arn:partition:kms:region:account:key/key-id. For example:
   * arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab. For more
   * information, see KMS key ARNs. If you do not specify an encryption key, your output is
   * encrypted with the default Amazon S3 key (SSE-S3). Note that the role making the request and
   * the role specified in the DataAccessRoleArn request parameter (if present) must have permission
   * to use the specified KMS key.
   */
  outputEncryptionKmsKeyId?: string;
  /**
   * A map of plain text, non-secret key:value pairs, known as encryption context pairs, that
   * provide an added layer of security for your data. For more information, see KMS encryption
   * context and Asymmetric keys in KMS.
   */
  kmsEncryptionContext?: Record<string, string>;
  settings?: Settings;
  modelSettings?: ModelSettings;
  jobExecutionSettings?: JobExecutionSettings;
  contentRedaction?: ContentRedaction;
  /**
   * Enables automatic language identification in your transcription job request. Use this parameter
   * if your media file contains only one language. If your media contains multiple languages, use
   * IdentifyMultipleLanguages instead. If you include IdentifyLanguage, you can optionally include
   * a list of language codes, using LanguageOptions, that you think may be present in your media
   * file. Including LanguageOptions restricts IdentifyLanguage to only the language options that
   * you specify, which can improve transcription accuracy. If you want to apply a custom language
   * model, a custom vocabulary, or a cu
   */
  identifyLanguage?: boolean;
  /**
   * Enables automatic multi-language identification in your transcription job request. Use this
   * parameter if your media file contains more than one language. If your media contains only one
   * language, use IdentifyLanguage instead. If you include IdentifyMultipleLanguages, you can
   * optionally include a list of language codes, using LanguageOptions, that you think may be
   * present in your media file. Including LanguageOptions restricts IdentifyLanguage to only the
   * language options that you specify, which can improve transcription accuracy. If you want to
   * apply a custom vocabulary or a custom vocabulary
   */
  identifyMultipleLanguages?: boolean;
  /**
   * You can specify two or more language codes that represent the languages you think may be
   * present in your media. Including more than five is not recommended. If you're unsure what
   * languages are present, do not include this parameter. If you include LanguageOptions in your
   * request, you must also include IdentifyLanguage. For more information, refer to Supported
   * languages. To transcribe speech in Modern Standard Arabic (ar-SA)in Amazon Web Services
   * GovCloud (US) (US-West, us-gov-west-1), Amazon Web Services GovCloud (US) (US-East,
   * us-gov-east-1), in Canada (Calgary) ca-west-1 and Africa (Cape Tow
   */
  languageOptions?: LanguageOption[];
  subtitles?: Subtitles;
  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new transcription job
   * at the time you start this new job. To learn more about using tags with Amazon Transcribe,
   * refer to Tagging resources.
   */
  tags?: Tag[];
  /**
   * If using automatic language identification in your request and you want to apply a custom
   * language model, a custom vocabulary, or a custom vocabulary filter, include LanguageIdSettings
   * with the relevant sub-parameters (VocabularyName, LanguageModelName, and VocabularyFilterName).
   * Note that multi-language identification (IdentifyMultipleLanguages) doesn't support custom
   * language models. LanguageIdSettings supports two to five language codes. Each language code you
   * include can have an associated custom language model, custom vocabulary, and custom vocabulary
   * filter. The language codes that you s
   */
  languageIdSettings?: Record<string, LanguageIdSettings>;
  /**
   * Enables toxic speech detection in your transcript. If you include ToxicityDetection in your
   * request, you must also include ToxicityCategories. For information on the types of toxic speech
   * Amazon Transcribe can detect, see Detecting toxic speech.
   */
  toxicityDetection?: ToxicityDetectionSettings[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTranscriptionJobRequestSchema: Schema<StartTranscriptionJobRequest> =
  s.object<StartTranscriptionJobRequest>(
    {
      transcriptionJobName: s.string(),
      languageCode: s.optional(s.lazy(() => languageCode3AmazonTranscribeServiceTranscriptionJobsApiSchema)),
      mediaSampleRateHertz: s.optional(s.int()),
      mediaFormat: s.optional(s.lazy(() => mediaFormat1Schema)),
      media: mediaSchema,
      outputBucketName: s.optional(s.string()),
      outputKey: s.optional(s.string()),
      outputEncryptionKmsKeyId: s.optional(s.string()),
      kmsEncryptionContext: s.optional(s.record(s.string(), s.string())),
      settings: s.optional(s.lazy(() => settingsSchema)),
      modelSettings: s.optional(s.lazy(() => modelSettingsSchema)),
      jobExecutionSettings: s.optional(s.lazy(() => jobExecutionSettingsSchema)),
      contentRedaction: s.optional(s.lazy(() => contentRedactionSchema)),
      identifyLanguage: s.optional(s.boolean()),
      identifyMultipleLanguages: s.optional(s.boolean()),
      languageOptions: s.optional(s.array(s.lazy(() => languageOptionSchema))),
      subtitles: s.optional(s.lazy(() => subtitlesSchema)),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      languageIdSettings: s.optional(
        s.record(
          s.string(),
          s.lazy(() => languageIdSettingsSchema),
        ),
      ),
      toxicityDetection: s.optional(s.array(s.lazy(() => toxicityDetectionSettingsSchema))),
      _keysMap: {
        transcriptionJobName: "TranscriptionJobName",
        languageCode: "LanguageCode",
        mediaSampleRateHertz: "MediaSampleRateHertz",
        mediaFormat: "MediaFormat",
        media: "Media",
        outputBucketName: "OutputBucketName",
        outputKey: "OutputKey",
        outputEncryptionKmsKeyId: "OutputEncryptionKMSKeyId",
        kmsEncryptionContext: "KMSEncryptionContext",
        settings: "Settings",
        modelSettings: "ModelSettings",
        jobExecutionSettings: "JobExecutionSettings",
        contentRedaction: "ContentRedaction",
        identifyLanguage: "IdentifyLanguage",
        identifyMultipleLanguages: "IdentifyMultipleLanguages",
        languageOptions: "LanguageOptions",
        subtitles: "Subtitles",
        tags: "Tags",
        languageIdSettings: "LanguageIdSettings",
        toxicityDetection: "ToxicityDetection",
      },
    },
    { additionalProperties: s.json() },
  );
