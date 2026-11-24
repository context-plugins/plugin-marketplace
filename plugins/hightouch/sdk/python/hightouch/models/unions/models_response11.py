from __future__ import annotations

from typing import TypeAlias

from ..enums.internal_server_error import InternalServerErrorOrStr
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

ModelsResponse11: TypeAlias = ValidateErrorJson | InternalServerErrorOrStr

ModelsResponse11Dict: TypeAlias = ValidateErrorJsonDict | InternalServerErrorOrStr
