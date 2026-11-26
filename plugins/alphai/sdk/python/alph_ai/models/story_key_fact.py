from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StoryKeyFact(SdkBaseModel):
    text: str
    """The fact as the summary states it; every figure in it appears in the source article."""

    source_uid: str
    """The ``uid`` of the article the fact was read from — a row of ``/api/stories/{story_id}/materials/``, openable
    with ``/api/news/{uid}/``. Empty when that article has since been removed."""

    publisher: str
    """The source domain of that article."""


class StoryKeyFactDict(TypedDict):
    text: str
    source_uid: str
    publisher: str
