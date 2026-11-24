from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeHybridIssuersListErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeHybridIssuersListError:
    def map(self, status_code: int, content: bytes) -> ApigeeHybridIssuersListErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_hybrid_issuers_list_error_mapper: Final[
    ErrorMapper[ApigeeHybridIssuersListErrorBody]
] = _ApigeeHybridIssuersListError()
