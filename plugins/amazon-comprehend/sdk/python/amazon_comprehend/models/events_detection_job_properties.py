from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.job_status3 import JobStatus3OrStr
from .enums.language_code10 import LanguageCode10OrStr
from .input_data_config import InputDataConfig, InputDataConfigDict
from .output_data_config import OutputDataConfig, OutputDataConfigDict


class EventsDetectionJobProperties(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier assigned to the events detection job."""

    job_arn: Optional[str] = Field(default=UNSET, alias="JobArn")
    """The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully qualified identifier for the
    job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN
    is as follows: arn::comprehend:::events-detection-job/ The following is an example job ARN:
    arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab"""

    job_name: Optional[str] = Field(default=UNSET, alias="JobName")
    """The name you assigned the events detection job."""

    job_status: Optional[JobStatus3OrStr] = Field(default=UNSET, alias="JobStatus")
    """The current status of the events detection job."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """A description of the status of the events detection job."""

    submit_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTime")
    """The time that the events detection job was submitted for processing."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The time that the events detection job completed."""

    input_data_config: Optional[InputDataConfig] = Field(default=UNSET, alias="InputDataConfig")
    output_data_config: Optional[OutputDataConfig] = Field(default=UNSET, alias="OutputDataConfig")
    language_code: Optional[LanguageCode10OrStr] = Field(default=UNSET, alias="LanguageCode")
    """The language code of the input documents."""

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data."""

    target_event_types: Optional[list[str]] = Field(default=UNSET, alias="TargetEventTypes")
    """The types of events that are detected by the job."""


class EventsDetectionJobPropertiesDict(TypedDict):
    job_id: NotRequired[str]
    job_arn: NotRequired[str]
    job_name: NotRequired[str]
    job_status: NotRequired[JobStatus3OrStr]
    message: NotRequired[str]
    submit_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    input_data_config: NotRequired[InputDataConfigDict]
    output_data_config: NotRequired[OutputDataConfigDict]
    language_code: NotRequired[LanguageCode10OrStr]
    data_access_role_arn: NotRequired[str]
    target_event_types: NotRequired[list[str]]
