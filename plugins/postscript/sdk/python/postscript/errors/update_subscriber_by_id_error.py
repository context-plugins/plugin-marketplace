from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

UpdateSubscriberByIdErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _UpdateSubscriberByIdError:
    def map(self, status_code: int, content: bytes) -> UpdateSubscriberByIdErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


update_subscriber_by_id_error_mapper: Final[ErrorMapper[UpdateSubscriberByIdErrorBody]] = _UpdateSubscriberByIdError()
