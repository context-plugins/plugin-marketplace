from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..pricing_input import PricingInput, PricingInputDict
from ..pricing_input1 import PricingInput1, PricingInput1Dict
from ..pricing_input2 import PricingInput2, PricingInput2Dict
from ..pricing_input3 import PricingInput3, PricingInput3Dict
from ..pricing_input4 import PricingInput4, PricingInput4Dict
from ..pricing_input5 import PricingInput5, PricingInput5Dict
from ..pricing_input6 import PricingInput6, PricingInput6Dict
from ..pricing_input7 import PricingInput7, PricingInput7Dict
from ..pricing_input8 import PricingInput8, PricingInput8Dict
from ..pricing_input9 import PricingInput9, PricingInput9Dict
from ..pricing_input10 import PricingInput10, PricingInput10Dict
from ..pricing_input11 import PricingInput11, PricingInput11Dict
from ..pricing_input12 import PricingInput12, PricingInput12Dict
from ..pricing_input13 import PricingInput13, PricingInput13Dict
from ..pricing_input14 import PricingInput14, PricingInput14Dict

PricingInput15: TypeAlias = Annotated[
    (
        Annotated[PricingInput, Tag("RecurringPerUnit")]
        | Annotated[PricingInput1, Tag("RecurringGraduated")]
        | Annotated[PricingInput2, Tag("RecurringVolume")]
        | Annotated[PricingInput3, Tag("RecurringPercentOfTotal")]
        | Annotated[PricingInput4, Tag("UsagePerUnit")]
        | Annotated[PricingInput5, Tag("UsageGraduated")]
        | Annotated[PricingInput6, Tag("UsageVolume")]
        | Annotated[PricingInput7, Tag("UsagePrepaidCredits")]
        | Annotated[PricingInput8, Tag("UsageBracketedPrepaidCredits")]
        | Annotated[PricingInput9, Tag("UsageCostPlus")]
        | Annotated[PricingInput10, Tag("OneTimePerUnit")]
        | Annotated[PricingInput11, Tag("SeatBasedPerUnit")]
        | Annotated[PricingInput12, Tag("SeatBasedGraduated")]
        | Annotated[PricingInput13, Tag("SeatBasedVolume")]
        | Annotated[PricingInput14, Tag("SeatBasedPrepaidCredits")]
    ),
    WireDiscriminator("pricingType"),
]

PricingInput15Dict: TypeAlias = (
    PricingInputDict
    | PricingInput1Dict
    | PricingInput2Dict
    | PricingInput3Dict
    | PricingInput4Dict
    | PricingInput5Dict
    | PricingInput6Dict
    | PricingInput7Dict
    | PricingInput8Dict
    | PricingInput9Dict
    | PricingInput10Dict
    | PricingInput11Dict
    | PricingInput12Dict
    | PricingInput13Dict
    | PricingInput14Dict
)
