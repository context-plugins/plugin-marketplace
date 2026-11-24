from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeUiPathOrchestratorJobsApi(str, Enum):
    """Licensing type of the robot"""

    UNATTENDED = "Unattended"
    ATTENDED = "Attended"
    NON_PRODUCTION = "NonProduction"
    TEST_AUTOMATION = "TestAutomation"
    RPA_DEVELOPER = "RpaDeveloper"
    STUDIO_X = "StudioX"
    HEADLESS_UNATTENDED = "HeadlessUnattended"

    __str__ = str.__str__


TypeUiPathOrchestratorJobsApiOrStr: TypeAlias = Annotated[
    TypeUiPathOrchestratorJobsApi | str, open_enum_validator(TypeUiPathOrchestratorJobsApi)
]
