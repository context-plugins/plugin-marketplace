from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OpenApiUseOwnBackend(str, Enum):
    """OPTIONAL. When 'Try It' is enabled, send requests directly from the browser to the URL defined in the OpenAPI
    spec instead of proxying through Archbee. Requires CORS configured on your backend."""

    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


OpenApiUseOwnBackendOrStr: TypeAlias = Annotated[OpenApiUseOwnBackend | str, open_enum_validator(OpenApiUseOwnBackend)]
