from __future__ import annotations

from typing import TypeAlias

from ..enums.internal_server_error import InternalServerErrorOrStr
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

SyncsResponse11: TypeAlias = ValidateErrorJson | InternalServerErrorOrStr

SyncsResponse11Dict: TypeAlias = ValidateErrorJsonDict | InternalServerErrorOrStr
