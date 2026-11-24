from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PatchApiV1AiSystemsByIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PatchApiV1AiSystemsByIdError:
    def map(self, status_code: int, content: bytes) -> PatchApiV1AiSystemsByIdErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


patch_api_v1_ai_systems_by_id_error_mapper: Final[
    ErrorMapper[PatchApiV1AiSystemsByIdErrorBody]
] = _PatchApiV1AiSystemsByIdError()
