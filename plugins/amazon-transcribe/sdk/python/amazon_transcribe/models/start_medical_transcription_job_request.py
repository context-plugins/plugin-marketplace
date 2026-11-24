from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_identification_type1 import ContentIdentificationType1OrStr
from .enums.language_code2_amazon_transcribe_service_medical_transcription_job_api import (
    LanguageCode2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
)
from .enums.media_format1 import MediaFormat1OrStr
from .enums.type2 import Type2OrStr
from .media import Media, MediaDict
from .medical_transcription_setting import MedicalTranscriptionSetting, MedicalTranscriptionSettingDict
from .tag_model import TagModel, TagModelDict


class StartMedicalTranscriptionJobRequest(SdkBaseModel):
    medical_transcription_job_name: str = Field(alias="MedicalTranscriptionJobName")
    """A unique name, chosen by you, for your medical transcription job. The name that you specify is also used as the
    default name of your transcription output file. If you want to specify a different name for your transcription
    output, use the OutputKey parameter. This name is case sensitive, cannot contain spaces, and must be unique within
    an Amazon Web Services account. If you try to create a new job with the same name as an existing job, you get a
    ConflictException error."""

    language_code: LanguageCode2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr = Field(alias="LanguageCode")
    """The language code that represents the language spoken in the input media file. US English (en-US) is the only
    valid value for medical transcription jobs. Any other value you enter for language code results in a
    BadRequestException error."""

    media_sample_rate_hertz: Optional[int] = Field(default=UNSET, alias="MediaSampleRateHertz")
    """The sample rate, in hertz, of the audio track in your input media file. If you do not specify the media sample
    rate, Amazon Transcribe Medical determines it for you. If you specify the sample rate, it must match the rate
    detected by Amazon Transcribe Medical; if there's a mismatch between the value that you specify and the value
    detected, your job fails. Therefore, in most cases, it's advised to omit MediaSampleRateHertz and let Amazon
    Transcribe Medical determine the sample rate."""

    media_format: Optional[MediaFormat1OrStr] = Field(default=UNSET, alias="MediaFormat")
    """Specify the format of your input media file."""

    media: Media = Field(alias="Media")
    output_bucket_name: str = Field(alias="OutputBucketName")
    """The name of the Amazon S3 bucket where you want your medical transcription output stored. Do not include the
    S3:// prefix of the specified bucket. If you want your output to go to a sub-folder of this bucket, specify it using
    the OutputKey parameter; OutputBucketName only accepts the name of a bucket. For example, if you want your output
    stored in S3://DOC-EXAMPLE-BUCKET, set OutputBucketName to DOC-EXAMPLE-BUCKET. However, if you want your output
    stored in S3://DOC-EXAMPLE-BUCKET/test-files/, set OutputBucketName to DOC-EXAMPLE-BUCKET and OutputKey to
    test-files/. Note that Amazon Transcribe"""

    output_key: Optional[str] = Field(default=UNSET, alias="OutputKey")
    """Use in combination with OutputBucketName to specify the output location of your transcript and, optionally, a
    unique name for your output file. The default name for your transcription output is the same as the name you
    specified for your medical transcription job (MedicalTranscriptionJobName). Here are some examples of how you can
    use OutputKey: If you specify 'DOC-EXAMPLE-BUCKET' as the OutputBucketName and 'my-transcript.json' as the
    OutputKey, your transcription output path is s3://DOC-EXAMPLE-BUCKET/my-transcript.json. If you specify
    'my-first-transcription' as the MedicalTranscriptionJobN"""

    output_encryption_kms_key_id: Optional[str] = Field(default=UNSET, alias="OutputEncryptionKMSKeyId")
    """The Amazon Resource Name (ARN) of a KMS key that you want to use to encrypt your medical transcription output.
    KMS key ARNs have the format arn:partition:kms:region:account:key/key-id. For example:
    arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab. For more information, see KMS key ARNs.
    If you do not specify an encryption key, your output is encrypted with the default Amazon S3 key (SSE-S3). Note that
    the role making the request and the role specified in the DataAccessRoleArn request parameter (if present) must have
    permission to use the specified KMS key."""

    kms_encryption_context: Optional[dict[str, str]] = Field(default=UNSET, alias="KMSEncryptionContext")
    """A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer
    of security for your data. For more information, see KMS encryption context and Asymmetric keys in KMS."""

    settings: Optional[MedicalTranscriptionSetting] = Field(default=UNSET, alias="Settings")
    content_identification_type: Optional[ContentIdentificationType1OrStr] = Field(
        default=UNSET, alias="ContentIdentificationType"
    )
    """Labels all personal health information (PHI) identified in your transcript. For more information, see Identifying
    personal health information (PHI) in a transcription."""

    specialty: Literal["PRIMARYCARE"] = Field(default="PRIMARYCARE", alias="Specialty")
    """Specify the predominant medical specialty represented in your media. For batch transcriptions, PRIMARYCARE is the
    only valid value. If you require additional specialties, refer to ."""

    type_: Type2OrStr = Field(alias="Type")
    """Specify whether your input media contains only one person (DICTATION) or contains a conversation between two
    people (CONVERSATION). For example, DICTATION could be used for a medical professional wanting to transcribe voice
    memos; CONVERSATION could be used for transcribing the doctor-patient dialogue during the patient's office visit."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Adds one or more custom tags, each in the form of a key:value pair, to a new medical transcription job at the
    time you start this new job. To learn more about using tags with Amazon Transcribe, refer to Tagging resources."""


class StartMedicalTranscriptionJobRequestDict(TypedDict):
    medical_transcription_job_name: str
    language_code: LanguageCode2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr
    media_sample_rate_hertz: NotRequired[int]
    media_format: NotRequired[MediaFormat1OrStr]
    media: MediaDict
    output_bucket_name: str
    output_key: NotRequired[str]
    output_encryption_kms_key_id: NotRequired[str]
    kms_encryption_context: NotRequired[dict[str, str]]
    settings: NotRequired[MedicalTranscriptionSettingDict]
    content_identification_type: NotRequired[ContentIdentificationType1OrStr]
    specialty: Literal["PRIMARYCARE"]
    type_: Type2OrStr
    tags: NotRequired[list[TagModelDict]]
