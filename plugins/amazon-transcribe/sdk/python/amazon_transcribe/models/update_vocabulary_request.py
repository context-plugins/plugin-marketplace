from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_configuration import EncryptionConfiguration, EncryptionConfigurationDict
from .enums.language_code4_amazon_transcribe_service_vocabularies_api import (
    LanguageCode4AmazonTranscribeServiceVocabulariesApiOrStr,
)


class UpdateVocabularyRequest(SdkBaseModel):
    vocabulary_name: str = Field(alias="VocabularyName")
    """The name of the custom vocabulary you want to update. Custom vocabulary names are case sensitive."""

    language_code: LanguageCode4AmazonTranscribeServiceVocabulariesApiOrStr = Field(alias="LanguageCode")
    """The language code that represents the language of the entries in the custom vocabulary you want to update. Each
    custom vocabulary must contain terms in only one language. A custom vocabulary can only be used to transcribe files
    in the same language as the custom vocabulary. For example, if you create a custom vocabulary using US English
    (en-US), you can only apply this custom vocabulary to files that contain English audio. For a list of supported
    languages and their associated language codes, refer to the Supported languages table."""

    phrases: Optional[list[str]] = Field(default=UNSET, alias="Phrases")
    """Use this parameter if you want to update your custom vocabulary by including all desired terms, as
    comma-separated values, within your request. The other option for updating your custom vocabulary is to save your
    entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the
    VocabularyFileUri parameter. Note that if you include Phrases in your request, you cannot use VocabularyFileUri; you
    must choose one or the other. Each language has a character set that contains all allowed characters for that
    specific language. If you use unsupported charac"""

    vocabulary_file_uri: Optional[str] = Field(default=UNSET, alias="VocabularyFileUri")
    """The Amazon S3 location of the text file that contains your custom vocabulary. The URI must be located in the same
    Amazon Web Services Region as the resource you're calling. Here's an example URI path:
    s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt Note that if you include VocabularyFileUri in your request, you cannot use
    the Phrases flag; you must choose one or the other."""

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains
    your input files (in this case, your custom vocabulary). If you include EncryptionConfiguration in your request,
    this role must also have permissions to access the specified KMS key. If the role that you specify doesn’t have the
    appropriate permissions, your request fails. IAM role ARNs have the format
    arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more
    information, see IAM ARNs."""

    encryption_configuration: Optional[EncryptionConfiguration] = Field(default=UNSET, alias="EncryptionConfiguration")


class UpdateVocabularyRequestDict(TypedDict):
    vocabulary_name: str
    language_code: LanguageCode4AmazonTranscribeServiceVocabulariesApiOrStr
    phrases: NotRequired[list[str]]
    vocabulary_file_uri: NotRequired[str]
    data_access_role_arn: NotRequired[str]
    encryption_configuration: NotRequired[EncryptionConfigurationDict]
