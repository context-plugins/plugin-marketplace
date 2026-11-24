from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.unusable_entitlement_error import UnusableEntitlementError

CreateObjectiveErrorBody: TypeAlias = UnusableEntitlementError | RawError


@dataclass(frozen=True, slots=True)
class _CreateObjectiveError:
    def map(self, status_code: int, content: bytes) -> CreateObjectiveErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case 403:
                return decode_json[UnusableEntitlementError](content)
            case _:
                return RawError(status_code, content)


create_objective_error_mapper: Final[ErrorMapper[CreateObjectiveErrorBody]] = _CreateObjectiveError()
