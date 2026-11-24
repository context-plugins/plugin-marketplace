from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Card(SdkBaseModel):
    title: str
    """Card title"""

    body: str
    """Card description text"""

    url: str
    """Card destination URL"""

    image: Optional[str] = UNSET
    """Card image URL"""


class CardDict(TypedDict):
    title: str
    body: str
    url: str
    image: NotRequired[str]
