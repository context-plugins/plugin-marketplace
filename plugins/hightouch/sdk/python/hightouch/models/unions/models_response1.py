from __future__ import annotations

from typing import TypeAlias

from ..enums.internal_server_error import InternalServerErrorOrStr
from ..model import Model, ModelDict
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

ModelsResponse1: TypeAlias = Model | ValidateErrorJson | InternalServerErrorOrStr

ModelsResponse1Dict: TypeAlias = ModelDict | ValidateErrorJsonDict | InternalServerErrorOrStr
