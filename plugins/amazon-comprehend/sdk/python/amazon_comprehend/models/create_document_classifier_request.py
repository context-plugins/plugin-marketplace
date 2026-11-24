from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_classifier_input_data_config import (
    DocumentClassifierInputDataConfig,
    DocumentClassifierInputDataConfigDict,
)
from .document_classifier_output_data_config import (
    DocumentClassifierOutputDataConfig,
    DocumentClassifierOutputDataConfigDict,
)
from .enums.language_code6 import LanguageCode6OrStr
from .enums.mode import ModeOrStr
from .tag_model import TagModel, TagModelDict
from .vpc_config import VpcConfig, VpcConfigDict


class CreateDocumentClassifierRequest(SdkBaseModel):
    document_classifier_name: str = Field(alias="DocumentClassifierName")
    """The name of the document classifier."""

    version_name: Optional[str] = Field(default=UNSET, alias="VersionName")
    """The version name given to the newly created classifier. Version names can have a maximum of 256 characters.
    Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all
    models with the same classifier name in the Amazon Web Services account/Amazon Web Services Region."""

    data_access_role_arn: str = Field(alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Tags to associate with the document classifier. A tag is a key-value pair that adds as a metadata to a resource
    used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its
    use by the sales department."""

    input_data_config: DocumentClassifierInputDataConfig = Field(alias="InputDataConfig")
    output_data_config: Optional[DocumentClassifierOutputDataConfig] = Field(default=UNSET, alias="OutputDataConfig")
    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates
    one."""

    language_code: LanguageCode6OrStr = Field(alias="LanguageCode")
    """The language of the input documents. You can specify any of the languages supported by Amazon Comprehend. All
    documents must be in the same language."""

    volume_kms_key_id: Optional[str] = Field(default=UNSET, alias="VolumeKmsKeyId")
    """ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on
    the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be
    either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a
    KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    """

    vpc_config: Optional[VpcConfig] = Field(default=UNSET, alias="VpcConfig")
    mode: Optional[ModeOrStr] = Field(default=UNSET, alias="Mode")
    """Indicates the mode in which the classifier will be trained. The classifier can be trained in multi-class
    (single-label) mode or multi-label mode. Multi-class mode identifies a single class label for each document and
    multi-label mode identifies one or more class labels for each document. Multiple labels for an individual document
    are separated by a delimiter. The default delimiter between labels is a pipe (|)."""

    model_kms_key_id: Optional[str] = Field(default=UNSET, alias="ModelKmsKeyId")
    """ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either
    of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS
    Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    """

    model_policy: Optional[str] = Field(default=UNSET, alias="ModelPolicy")
    r"""The resource-based policy to attach to your custom document classifier model. You can use this policy to allow
    another Amazon Web Services account to import your custom model. Provide your policy as a JSON body that you enter
    as a UTF-8 encoded string without line breaks. To provide valid JSON, enclose the attribute names and values in
    double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are
    inside the policy: "{\"attribute\": \"value\", \"attribute\": [\"value\"]}" To avoid escaping quotes, you can use
    single quotes to enclose the poli"""


class CreateDocumentClassifierRequestDict(TypedDict):
    document_classifier_name: str
    version_name: NotRequired[str]
    data_access_role_arn: str
    tags: NotRequired[list[TagModelDict]]
    input_data_config: DocumentClassifierInputDataConfigDict
    output_data_config: NotRequired[DocumentClassifierOutputDataConfigDict]
    client_request_token: NotRequired[str]
    language_code: LanguageCode6OrStr
    volume_kms_key_id: NotRequired[str]
    vpc_config: NotRequired[VpcConfigDict]
    mode: NotRequired[ModeOrStr]
    model_kms_key_id: NotRequired[str]
    model_policy: NotRequired[str]
