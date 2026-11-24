from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.field_log_level import FieldLogLevelOrStr


class LogConfig(SdkBaseModel):
    field_log_level: FieldLogLevelOrStr = Field(alias="fieldLogLevel")
    """The field logging level. Values can be NONE, ERROR, or ALL. NONE: No field-level logs are captured. ERROR: Logs
    the following information only for the fields that are in error: The error section in the server response.
    Field-level errors. The generated request/response functions that got resolved for error fields. ALL: The following
    information is logged for all fields in the query: Field-level tracing information. The generated request/response
    functions that got resolved for each field."""

    cloud_watch_logs_role_arn: str = Field(alias="cloudWatchLogsRoleArn")
    """The service role that AppSync assumes to publish to CloudWatch logs in your account."""

    exclude_verbose_content: Optional[bool] = Field(default=UNSET, alias="excludeVerboseContent")
    """Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping
    templates, regardless of logging level."""


class LogConfigDict(TypedDict):
    field_log_level: FieldLogLevelOrStr
    cloud_watch_logs_role_arn: str
    exclude_verbose_content: NotRequired[bool]
