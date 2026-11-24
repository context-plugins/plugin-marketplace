from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetAccountConfigurationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetAccountConfigurationError:
    def map(self, status_code: int, content: bytes) -> GetAccountConfigurationErrorBody:
        match status_code:
            case 400 | 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_account_configuration_error_mapper: Final[
    ErrorMapper[GetAccountConfigurationErrorBody]
] = _GetAccountConfigurationError()
