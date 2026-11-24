from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetApiV1GovernanceIctRegisterExportErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1GovernanceIctRegisterExportError:
    def map(self, status_code: int, content: bytes) -> GetApiV1GovernanceIctRegisterExportErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_v1_governance_ict_register_export_error_mapper: Final[
    ErrorMapper[GetApiV1GovernanceIctRegisterExportErrorBody]
] = _GetApiV1GovernanceIctRegisterExportError()
