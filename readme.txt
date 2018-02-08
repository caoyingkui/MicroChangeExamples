== DESCRIPTION:

This is a package of examples of micro changes extracted from jEdit, Eclipse JDT Core, Maven, and Guice. Micro changes occur within a simple statement, within the control part of a structure statement, or within the signature of a declaration.

== Usage:

   Download the folder. 
   Then, you can browse the examples by opening the index.html using a browser, chrome recommended. 

Hints: 
   Pattern EncapsulationLR and EncapsulationRL usually occur in elements of expression entities,such as BinaryExpr, MethodCallExpr, FieldAccessExpr, ObjectCreationExpr, ConditionalExpr, etc.
   Pattern MovingAcrossElements usually occurs in MethodCallExpr_arg, BinaryExpr_right, AssignExpr_value,ObjectCreationExpr_arg, etc.
   Pattern OrderingChange usually occur in MethodCallExpr_arg, ObjectCreationExpr_arg ArrayInitializerExpr_values, ConstructorDeclaration_parameter, MethodDeclaration_parameter, etc.
     
== Comparison with distiller:

The correspondence between micro changes and the one of ChangeDistiller is described in the document ComparisonWithDistiller.pdf.
In addition, each example is accompanied by micro changes and corresponding distiller changes for easy comparison.
