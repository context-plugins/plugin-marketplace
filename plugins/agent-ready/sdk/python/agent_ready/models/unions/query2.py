from __future__ import annotations

from typing import TypeAlias

from ..query import Query, QueryDict
from ..query1 import Query1, Query1Dict

Query2: TypeAlias = str | Query | Query1

Query2Dict: TypeAlias = str | QueryDict | Query1Dict
