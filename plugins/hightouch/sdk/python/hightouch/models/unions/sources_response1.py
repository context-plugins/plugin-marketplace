from __future__ import annotations

from typing import TypeAlias

from ..enums.internal_server_error import InternalServerErrorOrStr
from ..source import Source, SourceDict
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

SourcesResponse1: TypeAlias = Source | ValidateErrorJson | InternalServerErrorOrStr

SourcesResponse1Dict: TypeAlias = SourceDict | ValidateErrorJsonDict | InternalServerErrorOrStr
