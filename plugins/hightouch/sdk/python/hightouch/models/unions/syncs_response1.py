from __future__ import annotations

from typing import TypeAlias

from ..enums.internal_server_error import InternalServerErrorOrStr
from ..sync import Sync, SyncDict
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

SyncsResponse1: TypeAlias = Sync | ValidateErrorJson | InternalServerErrorOrStr

SyncsResponse1Dict: TypeAlias = SyncDict | ValidateErrorJsonDict | InternalServerErrorOrStr
