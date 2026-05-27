# lastz - mudfiller

Last Z: Mud Filler - An Alliance Defense Planner
An open-source web application designed for alliance leadership (R4 and R5 officers) in Last Z: Survival Shooter. This tool streamlines the planning, organization, and tactical deployment of an alliance's defensive setup during competitive Server v. Server (SvS) events, such as Capital Clash and State Ruler prep phases.

The application facilitates optimal placement across the map zones (Capital, Turrets, Brown Dirt, and Buffer zones) to maximize the alliance’s defense and coordination during the invasion windows.

Key Functionality & Architecture
The website allows R4/R5 alliance leaders to submit estimated number of HQs by alliance that will be in the mud. The tool then works to optimize placement of those alliances to eliminate areas for enemy alliances to teleport into, reduce clustering of HQs to maximize the fill, and then makes it very easy for alliance leaders to share specific coordinates not just within their alliance but across all alliances on the server. The copy / paste function allows easy coordinate sharing within the alliance.

Core Operations
one Assignment Optimization: Categorizes accounts by defensive spacing to match the specific structural requirements of the SvS map.

Interface Reference & Components
1. Data Input Forms & Parameters
The input forms allow officers to populate the tool with the alliance's current roster metrics.

Member Name / ID Field: Text input to uniquely identify alliance participants after the map placements are determined. These can be saved and shared via json files.

2. Action & Utility Buttons
"Add Alliance" Button: Appends the current configuration fields as a new row in the underlying master database and active data tables for additional alliances.

"Generate Fill" Button: Runs a sorting algorithm that automatically groups accounts into tactical roles based on their stats. High-power, high-HQ accounts are allocated to frontline combat, while mid-tier accounts are funneled into supportive shielding roles. Generate Fill does basic placement - gaps will reamin. Each time you click Generate Fill a new configuration will be generated within the rules established for HQ placement. Generate Fill will almost always have gaps remaining for enemy HQs - you need to use "Optimize Further" to eliminate those positions.

"Optimize Further" performs a deeper analysis for 30 seconds to further reduce potential enemy positions. "Optimize Further" can be used multiple times to further optimize the map.

The copy buttons through the tool allow you to copy all the coordinates, the coordinates by alliance, or the indvidual alliance HQ cooridinates. You can also download the generated map or a text json file for sharing the configuration with other alliances.  The load configuration button allows a generated configuration to be saved with other alliance members or other alliances.

"Clear Data" Button: Resets all fields and active lists, purging current configurations to prepare the tool for a new SvS cycle or a different state match-up.
