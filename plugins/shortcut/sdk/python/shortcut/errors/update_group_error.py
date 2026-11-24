from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.unusable_entitlement_error import UnusableEntitlementError

UpdateGroupErrorBody: TypeAlias = UnusableEntitlementError | RawError


@dataclass(frozen=True, slots=True)
class _UpdateGroupError:
    def map(self, status_code: int, content: bytes) -> UpdateGroupErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case 403:
                return decode_json[UnusableEntitlementError](content)
            case _:
                return RawError(status_code, content)


update_group_error_mapper: Final[ErrorMapper[UpdateGroupErrorBody]] = _UpdateGroupError()
