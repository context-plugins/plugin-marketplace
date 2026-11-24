from __future__ import annotations

from typing import TypeAlias

from ..application_bypass_update_body import ApplicationBypassUpdateBody, ApplicationBypassUpdateBodyDict
from ..base_inheritance import BaseInheritance, BaseInheritanceDict

Data81: TypeAlias = BaseInheritance | ApplicationBypassUpdateBody

Data81Dict: TypeAlias = BaseInheritanceDict | ApplicationBypassUpdateBodyDict
