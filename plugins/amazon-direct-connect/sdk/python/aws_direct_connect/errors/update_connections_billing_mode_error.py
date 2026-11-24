from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateConnectionsBillingModeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateConnectionsBillingModeError:
    def map(self, status_code: int, content: bytes) -> UpdateConnectionsBillingModeErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_connections_billing_mode_error_mapper: Final[
    ErrorMapper[UpdateConnectionsBillingModeErrorBody]
] = _UpdateConnectionsBillingModeError()
