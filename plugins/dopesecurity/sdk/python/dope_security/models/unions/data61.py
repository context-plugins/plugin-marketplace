from __future__ import annotations

from typing import TypeAlias

from ..base_inheritance import BaseInheritance, BaseInheritanceDict
from ..url_bypass_update_body import UrlBypassUpdateBody, UrlBypassUpdateBodyDict

Data61: TypeAlias = BaseInheritance | UrlBypassUpdateBody

Data61Dict: TypeAlias = BaseInheritanceDict | UrlBypassUpdateBodyDict
