from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1RobotReceiptV1RobotReceiptPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1RobotReceiptV1RobotReceiptPostError:
    def map(self, status_code: int, content: bytes) -> V1RobotReceiptV1RobotReceiptPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_robot_receipt_v1_robot_receipt_post_error_mapper: Final[
    ErrorMapper[V1RobotReceiptV1RobotReceiptPostErrorBody]
] = _V1RobotReceiptV1RobotReceiptPostError()
