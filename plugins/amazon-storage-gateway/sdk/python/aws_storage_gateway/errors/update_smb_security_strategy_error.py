from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateSmbSecurityStrategyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateSmbSecurityStrategyError:
    def map(self, status_code: int, content: bytes) -> UpdateSmbSecurityStrategyErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_smb_security_strategy_error_mapper: Final[
    ErrorMapper[UpdateSmbSecurityStrategyErrorBody]
] = _UpdateSmbSecurityStrategyError()
