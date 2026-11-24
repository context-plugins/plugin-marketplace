from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

SpeechSpeechRecognizeErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _SpeechSpeechRecognizeError:
    def map(self, status_code: int, content: bytes) -> SpeechSpeechRecognizeErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


speech_speech_recognize_error_mapper: Final[ErrorMapper[SpeechSpeechRecognizeErrorBody]] = _SpeechSpeechRecognizeError()
