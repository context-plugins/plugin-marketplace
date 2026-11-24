from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.language_code10 import LanguageCode10OrStr
from .input_data_config import InputDataConfig, InputDataConfigDict
from .output_data_config import OutputDataConfig, OutputDataConfigDict
from .tag_model import TagModel, TagModelDict


class StartEventsDetectionJobRequest(SdkBaseModel):
    input_data_config: InputDataConfig = Field(alias="InputDataConfig")
    output_data_config: OutputDataConfig = Field(alias="OutputDataConfig")
    data_access_role_arn: str = Field(alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data."""

    job_name: Optional[str] = Field(default=UNSET, alias="JobName")
    """The identifier of the events detection job."""

    language_code: LanguageCode10OrStr = Field(alias="LanguageCode")
    """The language code of the input documents."""

    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """An unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates
    one."""

    target_event_types: list[str] = Field(alias="TargetEventTypes")
    """The types of events to detect in the input documents."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Tags to associate with the events detection job. A tag is a key-value pair that adds metadata to a resource used
    by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by
    the sales department."""


class StartEventsDetectionJobRequestDict(TypedDict):
    input_data_config: InputDataConfigDict
    output_data_config: OutputDataConfigDict
    data_access_role_arn: str
    job_name: NotRequired[str]
    language_code: LanguageCode10OrStr
    client_request_token: NotRequired[str]
    target_event_types: list[str]
    tags: NotRequired[list[TagModelDict]]
