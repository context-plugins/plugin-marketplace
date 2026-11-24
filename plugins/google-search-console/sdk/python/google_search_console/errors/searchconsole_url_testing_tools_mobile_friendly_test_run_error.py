from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _SearchconsoleUrlTestingToolsMobileFriendlyTestRunError:
    def map(self, status_code: int, content: bytes) -> SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


searchconsole_url_testing_tools_mobile_friendly_test_run_error_mapper: Final[
    ErrorMapper[SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody]
] = _SearchconsoleUrlTestingToolsMobileFriendlyTestRunError()
