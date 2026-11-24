from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ParallelBeta(str, Enum):
    MCP_SERVER_2025_07_17 = "mcp-server-2025-07-17"
    EVENTS_SSE_2025_07_24 = "events-sse-2025-07-24"
    WEBHOOK_2025_08_12 = "webhook-2025-08-12"
    FINDALL_2025_09_15 = "findall-2025-09-15"
    SEARCH_EXTRACT_2025_10_10 = "search-extract-2025-10-10"
    FIELD_BASIS_2025_11_25 = "field-basis-2025-11-25"

    __str__ = str.__str__


ParallelBetaOrStr: TypeAlias = Annotated[ParallelBeta | str, open_enum_validator(ParallelBeta)]
