from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .recap_bullet_point import RecapBulletPoint, RecapBulletPointDict


class RecapTopic(SdkBaseModel):
    title: str
    bullet_points: list[RecapBulletPoint]


class RecapTopicDict(TypedDict):
    title: str
    bullet_points: list[RecapBulletPointDict]
