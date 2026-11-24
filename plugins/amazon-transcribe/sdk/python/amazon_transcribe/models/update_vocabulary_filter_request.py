from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_configuration import EncryptionConfiguration, EncryptionConfigurationDict


class UpdateVocabularyFilterRequest(SdkBaseModel):
    vocabulary_filter_name: str = Field(alias="VocabularyFilterName")
    """The name of the custom vocabulary filter you want to update. Custom vocabulary filter names are case
    sensitive."""

    words: Optional[list[str]] = Field(default=UNSET, alias="Words")
    """Use this parameter if you want to update your custom vocabulary filter by including all desired terms, as
    comma-separated values, within your request. The other option for updating your vocabulary filter is to save your
    entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the
    VocabularyFilterFileUri parameter. Note that if you include Words in your request, you cannot use
    VocabularyFilterFileUri; you must choose one or the other. Each language has a character set that contains all
    allowed characters for that specific language. If you use u"""

    vocabulary_filter_file_uri: Optional[str] = Field(default=UNSET, alias="VocabularyFilterFileUri")
    """The Amazon S3 location of the text file that contains your custom vocabulary filter terms. The URI must be
    located in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path:
    s3://DOC-EXAMPLE-BUCKET/my-vocab-filter-file.txt Note that if you include VocabularyFilterFileUri in your request,
    you cannot use Words; you must choose one or the other."""

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains
    your input files (in this case, your custom vocabulary filter). If you include EncryptionConfiguration in your
    request, this role must also have permissions to access the specified KMS key. If the role that you specify doesn’t
    have the appropriate permissions, your request fails. IAM role ARNs have the format
    arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more
    information, see IAM ARNs."""

    encryption_configuration: Optional[EncryptionConfiguration] = Field(default=UNSET, alias="EncryptionConfiguration")


class UpdateVocabularyFilterRequestDict(TypedDict):
    vocabulary_filter_name: str
    words: NotRequired[list[str]]
    vocabulary_filter_file_uri: NotRequired[str]
    data_access_role_arn: NotRequired[str]
    encryption_configuration: NotRequired[EncryptionConfigurationDict]
