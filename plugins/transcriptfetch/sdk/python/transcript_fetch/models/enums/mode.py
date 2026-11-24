from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode(str, Enum):
    """Where the text may come from. "captions" reads an existing caption track and fails if there is none, which is the
    only way to avoid audio transcription. "audio" skips captions and transcribes the audio. "auto" (the default) tries
    captions first and transcribes the audio when there are none. Short media may finish inline after a wait of up to 45
    seconds; longer work returns 202 with a job to poll or deliver by callback. Audio is charged only on delivery: 1
    credit per started minute of audio, minimum 1 (a 20-minute video is 20; the 4-hour cap is 240). Caption fetches are
    always 1 credit."""

    CAPTIONS = "captions"
    AUDIO = "audio"
    AUTO = "auto"

    __str__ = str.__str__


ModeOrStr: TypeAlias = Annotated[Mode | str, open_enum_validator(Mode)]
