from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content_redaction import ContentRedaction, ContentRedactionDict
from .enums.language_code3_amazon_transcribe_service_transcription_jobs_api import (
    LanguageCode3AmazonTranscribeServiceTranscriptionJobsApiOrStr,
)
from .enums.language_option import LanguageOptionOrStr
from .enums.media_format1 import MediaFormat1OrStr
from .job_execution_settings import JobExecutionSettings, JobExecutionSettingsDict
from .language_id_settings import LanguageIdSettings, LanguageIdSettingsDict
from .media import Media, MediaDict
from .model_settings import ModelSettings, ModelSettingsDict
from .settings import Settings, SettingsDict
from .subtitles import Subtitles, SubtitlesDict
from .tag_model import TagModel, TagModelDict
from .toxicity_detection_settings import ToxicityDetectionSettings, ToxicityDetectionSettingsDict


class StartTranscriptionJobRequest(SdkBaseModel):
    transcription_job_name: str = Field(alias="TranscriptionJobName")
    """A unique name, chosen by you, for your transcription job. The name that you specify is also used as the default
    name of your transcription output file. If you want to specify a different name for your transcription output, use
    the OutputKey parameter. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web
    Services account. If you try to create a new job with the same name as an existing job, you get a ConflictException
    error."""

    language_code: Optional[LanguageCode3AmazonTranscribeServiceTranscriptionJobsApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code that represents the language spoken in the input media file. If you're unsure of the language
    spoken in your media file, consider using IdentifyLanguage or IdentifyMultipleLanguages to enable automatic language
    identification. Note that you must include one of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages in
    your request. If you include more than one of these parameters, your transcription job fails. For a list of
    supported languages and their associated language codes, refer to the Supported languages table. To transcribe
    speech in Modern Standard Arabic (ar-S"""

    media_sample_rate_hertz: Optional[int] = Field(default=UNSET, alias="MediaSampleRateHertz")
    """The sample rate, in hertz, of the audio track in your input media file. If you do not specify the media sample
    rate, Amazon Transcribe determines it for you. If you specify the sample rate, it must match the rate detected by
    Amazon Transcribe. If there's a mismatch between the value that you specify and the value detected, your job fails.
    In most cases, you can omit MediaSampleRateHertz and let Amazon Transcribe determine the sample rate."""

    media_format: Optional[MediaFormat1OrStr] = Field(default=UNSET, alias="MediaFormat")
    """Specify the format of your input media file."""

    media: Media = Field(alias="Media")
    output_bucket_name: Optional[str] = Field(default=UNSET, alias="OutputBucketName")
    """The name of the Amazon S3 bucket where you want your transcription output stored. Do not include the S3:// prefix
    of the specified bucket. If you want your output to go to a sub-folder of this bucket, specify it using the
    OutputKey parameter; OutputBucketName only accepts the name of a bucket. For example, if you want your output stored
    in S3://DOC-EXAMPLE-BUCKET, set OutputBucketName to DOC-EXAMPLE-BUCKET. However, if you want your output stored in
    S3://DOC-EXAMPLE-BUCKET/test-files/, set OutputBucketName to DOC-EXAMPLE-BUCKET and OutputKey to test-files/. Note
    that Amazon Transcribe must hav"""

    output_key: Optional[str] = Field(default=UNSET, alias="OutputKey")
    """Use in combination with OutputBucketName to specify the output location of your transcript and, optionally, a
    unique name for your output file. The default name for your transcription output is the same as the name you
    specified for your transcription job (TranscriptionJobName). Here are some examples of how you can use OutputKey: If
    you specify 'DOC-EXAMPLE-BUCKET' as the OutputBucketName and 'my-transcript.json' as the OutputKey, your
    transcription output path is s3://DOC-EXAMPLE-BUCKET/my-transcript.json. If you specify 'my-first-transcription' as
    the TranscriptionJobName, 'DOC-EXAMPLE-BUCK"""

    output_encryption_kms_key_id: Optional[str] = Field(default=UNSET, alias="OutputEncryptionKMSKeyId")
    """The Amazon Resource Name (ARN) of a KMS key that you want to use to encrypt your transcription output. KMS key
    ARNs have the format arn:partition:kms:region:account:key/key-id. For example:
    arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab. For more information, see KMS key ARNs.
    If you do not specify an encryption key, your output is encrypted with the default Amazon S3 key (SSE-S3). Note that
    the role making the request and the role specified in the DataAccessRoleArn request parameter (if present) must have
    permission to use the specified KMS key."""

    kms_encryption_context: Optional[dict[str, str]] = Field(default=UNSET, alias="KMSEncryptionContext")
    """A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer
    of security for your data. For more information, see KMS encryption context and Asymmetric keys in KMS."""

    settings: Optional[Settings] = Field(default=UNSET, alias="Settings")
    model_settings: Optional[ModelSettings] = Field(default=UNSET, alias="ModelSettings")
    job_execution_settings: Optional[JobExecutionSettings] = Field(default=UNSET, alias="JobExecutionSettings")
    content_redaction: Optional[ContentRedaction] = Field(default=UNSET, alias="ContentRedaction")
    identify_language: Optional[bool] = Field(default=UNSET, alias="IdentifyLanguage")
    """Enables automatic language identification in your transcription job request. Use this parameter if your media
    file contains only one language. If your media contains multiple languages, use IdentifyMultipleLanguages instead.
    If you include IdentifyLanguage, you can optionally include a list of language codes, using LanguageOptions, that
    you think may be present in your media file. Including LanguageOptions restricts IdentifyLanguage to only the
    language options that you specify, which can improve transcription accuracy. If you want to apply a custom language
    model, a custom vocabulary, or a cu"""

    identify_multiple_languages: Optional[bool] = Field(default=UNSET, alias="IdentifyMultipleLanguages")
    """Enables automatic multi-language identification in your transcription job request. Use this parameter if your
    media file contains more than one language. If your media contains only one language, use IdentifyLanguage instead.
    If you include IdentifyMultipleLanguages, you can optionally include a list of language codes, using
    LanguageOptions, that you think may be present in your media file. Including LanguageOptions restricts
    IdentifyLanguage to only the language options that you specify, which can improve transcription accuracy. If you
    want to apply a custom vocabulary or a custom vocabulary"""

    language_options: Optional[list[LanguageOptionOrStr]] = Field(default=UNSET, alias="LanguageOptions")
    """You can specify two or more language codes that represent the languages you think may be present in your media.
    Including more than five is not recommended. If you're unsure what languages are present, do not include this
    parameter. If you include LanguageOptions in your request, you must also include IdentifyLanguage. For more
    information, refer to Supported languages. To transcribe speech in Modern Standard Arabic (ar-SA)in Amazon Web
    Services GovCloud (US) (US-West, us-gov-west-1), Amazon Web Services GovCloud (US) (US-East, us-gov-east-1), in
    Canada (Calgary) ca-west-1 and Africa (Cape Tow"""

    subtitles: Optional[Subtitles] = Field(default=UNSET, alias="Subtitles")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Adds one or more custom tags, each in the form of a key:value pair, to a new transcription job at the time you
    start this new job. To learn more about using tags with Amazon Transcribe, refer to Tagging resources."""

    language_id_settings: Optional[dict[str, LanguageIdSettings]] = Field(default=UNSET, alias="LanguageIdSettings")
    """If using automatic language identification in your request and you want to apply a custom language model, a
    custom vocabulary, or a custom vocabulary filter, include LanguageIdSettings with the relevant sub-parameters
    (VocabularyName, LanguageModelName, and VocabularyFilterName). Note that multi-language identification
    (IdentifyMultipleLanguages) doesn't support custom language models. LanguageIdSettings supports two to five language
    codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom
    vocabulary filter. The language codes that you s"""

    toxicity_detection: Optional[list[ToxicityDetectionSettings]] = Field(default=UNSET, alias="ToxicityDetection")
    """Enables toxic speech detection in your transcript. If you include ToxicityDetection in your request, you must
    also include ToxicityCategories. For information on the types of toxic speech Amazon Transcribe can detect, see
    Detecting toxic speech."""


class StartTranscriptionJobRequestDict(TypedDict):
    transcription_job_name: str
    language_code: NotRequired[LanguageCode3AmazonTranscribeServiceTranscriptionJobsApiOrStr]
    media_sample_rate_hertz: NotRequired[int]
    media_format: NotRequired[MediaFormat1OrStr]
    media: MediaDict
    output_bucket_name: NotRequired[str]
    output_key: NotRequired[str]
    output_encryption_kms_key_id: NotRequired[str]
    kms_encryption_context: NotRequired[dict[str, str]]
    settings: NotRequired[SettingsDict]
    model_settings: NotRequired[ModelSettingsDict]
    job_execution_settings: NotRequired[JobExecutionSettingsDict]
    content_redaction: NotRequired[ContentRedactionDict]
    identify_language: NotRequired[bool]
    identify_multiple_languages: NotRequired[bool]
    language_options: NotRequired[list[LanguageOptionOrStr]]
    subtitles: NotRequired[SubtitlesDict]
    tags: NotRequired[list[TagModelDict]]
    language_id_settings: NotRequired[dict[str, LanguageIdSettingsDict]]
    toxicity_detection: NotRequired[list[ToxicityDetectionSettingsDict]]
