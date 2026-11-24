from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

AskQuestionErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _AskQuestionError:
    def map(self, status_code: int, content: bytes) -> AskQuestionErrorBody:
        match status_code:
            case 401 | 402:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


ask_question_error_mapper: Final[ErrorMapper[AskQuestionErrorBody]] = _AskQuestionError()
