from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..cost import Cost, CostDict
from ..cost1 import Cost1, Cost1Dict

Cost2: TypeAlias = Annotated[Annotated[Cost, Tag("cost")] | Annotated[Cost1, Tag("usage")], WireDiscriminator("type")]

Cost2Dict: TypeAlias = CostDict | Cost1Dict
