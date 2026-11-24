from __future__ import annotations

from typing import TypeAlias

from ..audience_size_job import AudienceSizeJob, AudienceSizeJobDict
from ..enums.internal_server_error import InternalServerErrorOrStr
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

ModelsSizeResponse1: TypeAlias = AudienceSizeJob | ValidateErrorJson | InternalServerErrorOrStr

ModelsSizeResponse1Dict: TypeAlias = AudienceSizeJobDict | ValidateErrorJsonDict | InternalServerErrorOrStr
