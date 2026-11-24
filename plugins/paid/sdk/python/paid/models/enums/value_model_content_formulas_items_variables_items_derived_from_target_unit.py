from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit(str, Enum):
    SECONDS = "seconds"
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"

    __str__ = str.__str__


ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnitOrStr: TypeAlias = Annotated[
    ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit | str,
    open_enum_validator(ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit),
]
