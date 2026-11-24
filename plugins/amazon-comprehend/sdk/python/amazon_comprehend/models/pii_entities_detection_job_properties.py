from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.job_status5 import JobStatus5OrStr
from .enums.language_code10 import LanguageCode10OrStr
from .enums.mode3 import Mode3OrStr
from .input_data_config import InputDataConfig, InputDataConfigDict
from .pii_output_data_config import PiiOutputDataConfig, PiiOutputDataConfigDict
from .redaction_config import RedactionConfig, RedactionConfigDict


class PiiEntitiesDetectionJobProperties(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier assigned to the PII entities detection job."""

    job_arn: Optional[str] = Field(default=UNSET, alias="JobArn")
    """The Amazon Resource Name (ARN) of the PII entities detection job. It is a unique, fully qualified identifier for
    the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the
    ARN is as follows: arn::comprehend:::pii-entities-detection-job/ The following is an example job ARN:
    arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab"""

    job_name: Optional[str] = Field(default=UNSET, alias="JobName")
    """The name that you assigned the PII entities detection job."""

    job_status: Optional[JobStatus5OrStr] = Field(default=UNSET, alias="JobStatus")
    """The current status of the PII entities detection job. If the status is FAILED, the Message field shows the reason
    for the failure."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """A description of the status of a job."""

    submit_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTime")
    """The time that the PII entities detection job was submitted for processing."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The time that the PII entities detection job completed."""

    input_data_config: Optional[InputDataConfig] = Field(default=UNSET, alias="InputDataConfig")
    output_data_config: Optional[PiiOutputDataConfig] = Field(default=UNSET, alias="OutputDataConfig")
    redaction_config: Optional[RedactionConfig] = Field(default=UNSET, alias="RedactionConfig")
    language_code: Optional[LanguageCode10OrStr] = Field(default=UNSET, alias="LanguageCode")
    """The language code of the input documents."""

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data."""

    mode: Optional[Mode3OrStr] = Field(default=UNSET, alias="Mode")
    """Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are
    redacted."""


class PiiEntitiesDetectionJobPropertiesDict(TypedDict):
    job_id: NotRequired[str]
    job_arn: NotRequired[str]
    job_name: NotRequired[str]
    job_status: NotRequired[JobStatus5OrStr]
    message: NotRequired[str]
    submit_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    input_data_config: NotRequired[InputDataConfigDict]
    output_data_config: NotRequired[PiiOutputDataConfigDict]
    redaction_config: NotRequired[RedactionConfigDict]
    language_code: NotRequired[LanguageCode10OrStr]
    data_access_role_arn: NotRequired[str]
    mode: NotRequired[Mode3OrStr]
