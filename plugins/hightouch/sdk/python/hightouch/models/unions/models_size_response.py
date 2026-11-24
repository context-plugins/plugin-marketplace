from __future__ import annotations

from typing import TypeAlias

from ..enums.internal_server_error import InternalServerErrorOrStr
from ..start_audience_size_job_output import StartAudienceSizeJobOutput, StartAudienceSizeJobOutputDict
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

ModelsSizeResponse: TypeAlias = StartAudienceSizeJobOutput | ValidateErrorJson | InternalServerErrorOrStr

ModelsSizeResponseDict: TypeAlias = StartAudienceSizeJobOutputDict | ValidateErrorJsonDict | InternalServerErrorOrStr
