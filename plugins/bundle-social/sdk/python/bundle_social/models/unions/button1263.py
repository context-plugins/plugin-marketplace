from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..button126 import Button126, Button126Dict
from ..button1261 import Button1261, Button1261Dict
from ..button1262 import Button1262, Button1262Dict

Button1263: TypeAlias = Annotated[
    Annotated[Button126, Tag("POSTBACK")] | Annotated[Button1261, Tag("URL")] | Annotated[Button1262, Tag("PHONE")],
    WireDiscriminator("type"),
]

Button1263Dict: TypeAlias = Button126Dict | Button1261Dict | Button1262Dict
