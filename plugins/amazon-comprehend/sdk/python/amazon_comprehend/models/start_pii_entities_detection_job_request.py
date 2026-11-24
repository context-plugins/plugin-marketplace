from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.language_code26 import LanguageCode26OrStr
from .enums.mode3 import Mode3OrStr
from .input_data_config import InputDataConfig, InputDataConfigDict
from .output_data_config import OutputDataConfig, OutputDataConfigDict
from .redaction_config import RedactionConfig, RedactionConfigDict
from .tag_model import TagModel, TagModelDict


class StartPiiEntitiesDetectionJobRequest(SdkBaseModel):
    input_data_config: InputDataConfig = Field(alias="InputDataConfig")
    output_data_config: OutputDataConfig = Field(alias="OutputDataConfig")
    mode: Mode3OrStr = Field(alias="Mode")
    """Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are
    redacted."""

    redaction_config: Optional[RedactionConfig] = Field(default=UNSET, alias="RedactionConfig")
    data_access_role_arn: str = Field(alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data."""

    job_name: Optional[str] = Field(default=UNSET, alias="JobName")
    """The identifier of the job."""

    language_code: LanguageCode26OrStr = Field(alias="LanguageCode")
    """The language of the input documents. Enter the language code for English (en) or Spanish (es)."""

    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates
    one."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Tags to associate with the PII entities detection job. A tag is a key-value pair that adds metadata to a resource
    used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its
    use by the sales department."""


class StartPiiEntitiesDetectionJobRequestDict(TypedDict):
    input_data_config: InputDataConfigDict
    output_data_config: OutputDataConfigDict
    mode: Mode3OrStr
    redaction_config: NotRequired[RedactionConfigDict]
    data_access_role_arn: str
    job_name: NotRequired[str]
    language_code: LanguageCode26OrStr
    client_request_token: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
