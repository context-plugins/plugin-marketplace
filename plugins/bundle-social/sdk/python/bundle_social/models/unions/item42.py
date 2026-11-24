from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..item4 import Item4, Item4Dict
from ..item41 import Item41, Item41Dict

Item42: TypeAlias = Annotated[
    Annotated[Item4, Tag("POSTBACK")] | Annotated[Item41, Tag("URL")], WireDiscriminator("type")
]

Item42Dict: TypeAlias = Item4Dict | Item41Dict
