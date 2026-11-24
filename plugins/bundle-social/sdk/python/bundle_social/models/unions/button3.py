from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..button import Button, ButtonDict
from ..button1 import Button1, Button1Dict
from ..button2 import Button2, Button2Dict

Button3: TypeAlias = Annotated[
    Annotated[Button, Tag("POSTBACK")] | Annotated[Button1, Tag("URL")] | Annotated[Button2, Tag("PHONE")],
    WireDiscriminator("type"),
]

Button3Dict: TypeAlias = ButtonDict | Button1Dict | Button2Dict
