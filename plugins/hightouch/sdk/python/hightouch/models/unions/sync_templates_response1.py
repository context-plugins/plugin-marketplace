from __future__ import annotations

from typing import TypeAlias

from ..enums.internal_server_error import InternalServerErrorOrStr
from ..sync_template import SyncTemplate, SyncTemplateDict
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

SyncTemplatesResponse1: TypeAlias = SyncTemplate | ValidateErrorJson | InternalServerErrorOrStr

SyncTemplatesResponse1Dict: TypeAlias = SyncTemplateDict | ValidateErrorJsonDict | InternalServerErrorOrStr
