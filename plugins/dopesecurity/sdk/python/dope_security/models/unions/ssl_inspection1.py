from __future__ import annotations

from typing import TypeAlias

from ..base_inheritance import BaseInheritance, BaseInheritanceDict
from ..ssl_inspection_state_body import SslInspectionStateBody, SslInspectionStateBodyDict

SslInspection1: TypeAlias = SslInspectionStateBody | BaseInheritance

SslInspection1Dict: TypeAlias = SslInspectionStateBodyDict | BaseInheritanceDict
