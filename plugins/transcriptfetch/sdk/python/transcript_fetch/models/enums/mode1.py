from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode1(str, Enum):
    """Where each entry's text may come from. "auto" (the default) reads captions and transcribes the audio when there
    are none. "captions" reads an existing caption track only, so a captionless video fails as no_transcript - the
    behaviour batch had before audio fallback existed. Note "audio" is not accepted here: skipping captions for 50
    videos at once is a job queue, not a batch fetch."""

    AUTO = "auto"
    CAPTIONS = "captions"

    __str__ = str.__str__


Mode1OrStr: TypeAlias = Annotated[Mode1 | str, open_enum_validator(Mode1)]
