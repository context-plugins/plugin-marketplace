from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ProofOfWorkErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ProofOfWorkError:
    def map(self, status_code: int, content: bytes) -> ProofOfWorkErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


proof_of_work_error_mapper: Final[ErrorMapper[ProofOfWorkErrorBody]] = _ProofOfWorkError()
